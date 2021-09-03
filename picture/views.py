from django.shortcuts import render
from django.views.generic import TemplateView, View
from .models import Picture
from django.core import serializers
from django.http import JsonResponse

# Create your views here.

class HomeView(TemplateView):
	template_name = "picture/main.html"

class PictureView(View):
	def get(self, request):
		qs = Picture.objects.all()
		# print(qs)
		data = serializers.serialize('json', qs)
		# print(data)
		return JsonResponse({'data': data}, safe=False)