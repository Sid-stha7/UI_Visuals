from django.shortcuts import render
from project.ui_app.serializer import ReactSerializer
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.response import Response
# Create your views here.

class ReactView(APIView):

    def get(self,request):
        output= [{"headtext":  output.employee, 
                 "head_image": output.header_image}
                for output in React.objects.all()]
        return Response(output)

    def post(self,request):
                 serializer= ReactSerializer(data=request.data)
                 if serializer.is_valid(raise_exception=True):
                    serializer.save()
                    return Response(serializer.data)
