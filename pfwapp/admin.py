from django.contrib import admin

from .models import Project, Image

class ProjectAdmin(admin.ModelAdmin):
    project_list = ("name", "url")

class ImageAdmin(admin.ModelAdmin):
    Image_list = ("name", "url")

admin.site.register(Project, ProjectAdmin)
admin.site.register(Image, ImageAdmin)

