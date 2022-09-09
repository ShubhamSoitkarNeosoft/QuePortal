"""
Views for the user API.
"""
from rest_framework import generics, authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.contrib.auth import get_user_model

from users.serializers import (
    UserSerializer,
    # AuthTokenSerializer,
)

User = get_user_model()


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)