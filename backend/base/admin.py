from django.contrib import admin
from .models import Client, Mentor , Interviewee, Technology, QuestionSet, Question, Category, Contactus, Assignment
from base.models import Assesment




# admin.site.register(Csv)

# class MentorAdmin(admin.ModelAdmin):
#     list_display = ['id', 'user', 'client']
# admin.site.register(Mentor, MentorAdmin)
admin.site.register(Mentor)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'category_name',]
admin.site.register(Category, CategoryAdmin)

# class ClientAdmin(admin.ModelAdmin):
#     list_display = ['id','user' 'category','requirement_id','mentor','name','project_type','status',
#     'address','interview_date',]
# admin.site.register(Client, ClientAdmin)
admin.site.register(Client)

class TechnologyAdmin(admin.ModelAdmin):
    list_display = ['id', 'technology_name',]
admin.site.register(Technology, TechnologyAdmin)

class IntervieweeAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'client']
admin.site.register(Interviewee, IntervieweeAdmin)

class QuestionAdmin(admin.ModelAdmin):
    list_display = ['client', 'technology', 'question', 'category']
admin.site.register(Question, QuestionAdmin)

class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'message']
admin.site.register(Contactus, ContactAdmin)

class AssignmentAdmin(admin.ModelAdmin):
    list_display = ['client', 'user', 'status', 'job_profile', 'assigned_date', 'assigned_by']
admin.site.register(Assignment, AssignmentAdmin)


admin.site.register(QuestionSet)
admin.site.register(Assesment)








