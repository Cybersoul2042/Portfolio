from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

from .models import Project, Image

def index(request):
    projects = Project.objects.all()

    return render(request, 'pfwapp/index.html', {
        "Projects": projects,
        "logo": Image.objects.get(name="logo").url
    })
