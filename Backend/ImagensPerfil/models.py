from django.db import models
from django.conf import settings
from alojamento.models import Alojamento

class Imagens(models.Model):
    hotel_owner=models.ForeignKey(Alojamento, on_delete=models.CASCADE)
    perfil=models.BooleanField(default=True)
    Quarto_Solteiro=models.BooleanField(default=False)
    Quarto_Duplo=models.BooleanField(default=False)
    Quarto_Casal=models.BooleanField(default=False)
    Outros=models.BooleanField(default=False)
    img=models.ImageField(upload_to='imagens')


    def __str__(self):
        return  "img"+str( self.id)

    