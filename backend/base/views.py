from email import message
from unicodedata import category
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from . import serializers
from . import models

@api_view(['GET','POST'])
def getQuestions(request):
    question_python = models.Question.objects.filter(client__name='client1').filter(technology__technology_name="python").filter(
            category__category_name="Python")
    question_python_count = len(question_python)
    serializer = serializers.QuestionSerializer(question_python,many = True)
    print('--',serializer.data)
    return Response(serializer.data,{'question_count':question_python_count}, status = status.HTTP_200_OK)
    # try:
    #     question_python = models.Question.objects.filter(client__name='client1').filter(technology__technology_name="python").filter(
    #         category__category_name="Python")
    #     question_python_count = len(question_python)
    #     serializer = serializers.QuestionSerializer(question_python,many = True)
    #     print('--',serializer.data)
    #     return Response(serializer.data,{'question_count':question_python_count},status = status.HTTP_200_OK)
    # except:
    #     message = {"message":"No such client/Catagory/Technolgy found"}
    #     return Response(message, status = status.HTTP_400_BAD_REQUEST)





