from django.urls import path
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView, # We will use this token for login purpose
#     # TokenRefreshView,
# )
# This view will return access token along with encoded data in that token
from . import views


urlpatterns = [
    path('users/register', views.registerUser, name='register'),
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile', views.getUserProfile, name = 'user-profile'),
    path('users/', views.getUsers, name = 'users'),

]