# Generated by Django 3.0.5 on 2020-06-26 14:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eventos', '0004_evento_userlembrete'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='evento',
            name='UserLembrete',
        ),
    ]
