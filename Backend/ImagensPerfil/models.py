from django.db import models
from django.conf import settings
from alojamento.models import Alojamento


def uploud_image(instance, filename):
    return "{}{}".format(instance.hotel_owner,filename)


class Imagens(models.Model):
    hotel_owner=models.ForeignKey(Alojamento, on_delete=models.CASCADE)
    perfil=models.BooleanField(default=True)
    Quarto_Solteiro=models.BooleanField(default=False)
    Quarto_Duplo=models.BooleanField(default=False)
    Quarto_Casal=models.BooleanField(default=False)
    Outros=models.BooleanField(default=False)
    img=models.ImageField(upload_to=uploud_image)


    def __str__(self):
        return  str(self.img)#self.img.url

    