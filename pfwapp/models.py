from django.db import models

class Project(models.Model):
    name = models.CharField(max_length = 64)
    url = models.URLField()

    def serialize(self):
        return {
            "name": self.name,
            "url": self.url
        }
    
class Image(models.Model):
    name = models.CharField(max_length = 64)
    url = models.URLField()

    def serialize(self):
        return {
            "name": self.name,
            "url": self.url
        }
