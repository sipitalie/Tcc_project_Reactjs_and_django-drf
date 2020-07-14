from django.urls import path 
#from rest_framework.urlpatterns import format_suffix_patterns
from .views import alojamentos, AlojamentoCreate, AlojamentoDetail
    
urlpatterns = [
    path('alojamentos/',  alojamentos),
    path('alojamentos/<int:pk>/',AlojamentoDetail.as_view()),
    path('alojamentos/register', AlojamentoCreate.as_view(), name="register"),      
]
#urlpatterns = format_suffix_patterns(urlpatterns)


