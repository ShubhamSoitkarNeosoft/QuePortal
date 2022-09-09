from django.shortcuts import render
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    '''
    encodes/add data in the token
     and returns data encoded in token
    '''
    # @classmethod
    # def get_token(cls, user):
    #     token = super().get_token(user)

    #     # Add custom claims ..encoding more information with token
    #     token['email'] = user.email
    #     token['message'] = 'hello'
    #     # ...

    #     return token
    
    def validate(self, attrs):
        '''
        we get more data fields along with token not inside the token
        by customizing this method
        '''
        data = super().validate(attrs)

        data['email'] = self.user.email
        # serializer = UserSerializerWithToken(self.user).data
        # for k, v in serializer.items():
        #     data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    '''
    returns aceess token with data encoded in that token
    '''
    serializer_class = MyTokenObtainPairSerializer