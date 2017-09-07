from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

def index(request):
    return render(request, 'backendTech/index.html')

def all(request):
    return JsonResponse({ "data": "all" })

def active(request):
    return JsonResponse({ "data": "active" })

def completed(request):
    return JsonResponse({ "data": "completed" })
