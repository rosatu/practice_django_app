from rest_framework import serializers
from home_automation.models import *

class LocksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Locks
        fields = '__all__'

class PsPropertiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PsProperties
        fields = '__all__'
