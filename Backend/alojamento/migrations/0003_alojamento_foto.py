# Generated by Django 3.0.5 on 2020-07-18 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alojamento', '0002_remove_alojamento_imgs'),
    ]

    operations = [
        migrations.AddField(
            model_name='alojamento',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='imagens/perfil_home_alojamento'),
        ),
    ]