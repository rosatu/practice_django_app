from django.db import models

class Locks(models.Model):
    remote_lock_id = models.CharField(max_length=100)
    property_id = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class PsProperties(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
