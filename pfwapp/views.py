from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

from .models import Project, Image

def index(request):
    projects = Project.objects.all()
    projectsName = [project.name for project in projects]
    return render(request, 'pfwapp/index.html', {
        "Projects": projectsName,
        "logo": Image.objects.get(name="logo").url
    })
