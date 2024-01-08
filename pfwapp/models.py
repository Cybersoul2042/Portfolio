from django.db import models

class project(models.Model):
    name = models.CharField(max = 64)
    url = models.URLField()
