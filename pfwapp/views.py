from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

from .models import Project

def index(request):
    projects = Project.objects.all()

    return render(request, 'pfwapp/index.html', {
        "Projects": projects
    })
