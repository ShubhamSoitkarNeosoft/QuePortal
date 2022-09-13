from django.urls import path
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView, # We will use this token for login purpose
#     # TokenRefreshView,
# )
# This view will return access token along with encoded data in that token
from . import views


urlpatterns = [
    path('questions/',views.getQuestions, name = "questions"),
    path('getclients/',views.getClients, name = "clients"),
    path('getcategories/',views.getCategories, name = "clients"),
]