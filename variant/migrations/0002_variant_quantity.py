# Generated by Django 3.2.6 on 2021-08-17 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('variant', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='variant',
            name='quantity',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]