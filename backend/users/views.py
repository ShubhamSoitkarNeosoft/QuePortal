"""
Views for the user API.
"""
from rest_framework import generics, authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from users.serializers import (
    UserSerializer,
    UserSerializerWithToken,
    # AuthTokenSerializer,
)

User = get_user_model()


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name = data['first_name'],
            last_name = data['last_name'],
            email = data['email'],
            password = make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def getUserProfile(request):
    user = request.user # This is not a normal django user it comes from token as we are using DRF
    if user.is_anonymous:
        message = 'anonymous user not allowed'
        return Response({'message':message}, status=status.HTTP_400_BAD_REQUEST)
    else:
        serializer = UserSerializer(user, many = False)
        return Response(serializer.data, status = status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAdminUser,])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many = True)
    return Response(serializer.data,status=status.HTTP_200_OK)



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    @classmethod
    def get_token(cls, user):
        '''
        encodes/add data in the token
        and returns data encoded in token
        '''
        token = super().get_token(user)

        # Add custom claims ..encoding more information with token
        token['email'] = user.email
        token['message'] = 'hello'
        # ...

        return token
    
    def validate(self, attrs):
        '''
        we get more data fields along with token not inside the token
        by customizing this method
        '''
        data = super().validate(attrs)

        # data['email'] = self.user.email --we can pass data like this also but we can pass through serializer
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    '''
    returns aceess token with data encoded in that token
    '''
    serializer_class = MyTokenObtainPairSerializer