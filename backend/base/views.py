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
import ast

@api_view(['GET','POST'])
def getQuestions(request):
    if request.method == 'POST':
        byte_str = request.body
        dict_str = byte_str.decode("UTF-8")
        my_data = ast.literal_eval(dict_str)
        print(type(my_data))
    try:
        question_python = models.Question.objects.filter(client__name='client1').filter(technology__technology_name="python").filter(
                category__category_name="Python")
        question_python_count = len(question_python)
        serializer = serializers.QuestionSerializer(question_python,many = True)
        d = {}
        d['question_detail'] = serializer.data
        d['question_count'] = question_python_count
        return Response(data=d, status = status.HTTP_200_OK)
    except:
        message = {"message":"No such client/Catagory/Technolgy found"}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET',])
def getClients(request):
    clients = models.Client.objects.all()
    categories = models.Category.objects.all()
    serializer = serializers.ClientSerializer(clients, many = True)
    return Response(serializer.data, status = status.HTTP_200_OK)


@api_view(['GET',])
def getCategories(request):
    categories = models.Category.objects.all()
    serializer = serializers.CategorySerializer(categories, many = True)
    return Response(serializer.data, status = status.HTTP_200_OK)








