from django.contrib import admin

from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    project_list = ("name", "url")

admin.site.register(Project, ProjectAdmin)

