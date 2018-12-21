# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from home_automation.models import *
from home_automation.serializers import *
from rest_framework import generics

class LocksListCreate(generics.ListCreateAPIView):
    queryset = Locks.objects.all()
    serializer_class = LocksSerializer

class PsPropertiesListCreate(generics.ListCreateAPIView):
    queryset = PsProperties.objects.all()
    serializer_class = PsPropertiesSerializer
