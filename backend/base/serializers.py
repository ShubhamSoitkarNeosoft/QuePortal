from . import models
from rest_framework import serializers


class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Mentor
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Technology
        fields = '__all__'

class IntervieweeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Interviewee
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Question
        fields = '__all__'

class QuestionSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.QuestionSet
        fields = '__all__'

class ContactusSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contactus
        fields = '__all__'

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Assignment
        fields = '__all__'

class AssesmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Assesment
        fields = '__all__'
