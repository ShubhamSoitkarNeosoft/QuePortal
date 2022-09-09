"""
Serializers for the user API View.
"""
from django.contrib.auth import (
    get_user_model,
    authenticate,
)
from rest_framework_simplejwt.tokens import RefreshToken
from django.utils.translation import gettext as _

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for the user object.
    Used for sending User Info
    """

    first_name = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = get_user_model()
        fields = ['id','email','first_name','last_name','is_staff','is_active','is_superuser',]
        # extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}

    def get_first_name(self,obj):
        first_name = obj.first_name
        if first_name == '':
            first_name = obj.email
        return first_name

    def create(self, validated_data):
        """Create and return a user with encrypted password."""
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        """Update and return user."""
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user

class UserSerializerWithToken(UserSerializer):
    '''
    Used while registration for sending token right away when user registers
    '''
    token = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = get_user_model()
        fields = ['id','email','first_name','last_name','is_staff','is_active','is_superuser','token',]

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

# class AuthTokenSerializer(serializers.Serializer):
#     """Serializer for the user auth token."""
#     email = serializers.EmailField()
#     password = serializers.CharField(
#         style={'input_type': 'password'},
#         trim_whitespace=False,
#     )

#     def validate(self, attrs):
#         """Validate and authenticate the user."""
#         email = attrs.get('email')
#         password = attrs.get('password')
#         user = authenticate(
#             request=self.context.get('request'),
#             username=email,
#             password=password,
#         )
#         if not user:
#             msg = _('Unable to authenticate with provided credentials.')
#             raise serializers.ValidationError(msg, code='authorization')

#         attrs['user'] = user
#         return attrs
