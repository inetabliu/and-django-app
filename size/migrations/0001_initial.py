# Generated by Django 3.2.6 on 2021-08-17 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uk_size', models.FloatField()),
                ('eu_size', models.IntegerField()),
            ],
        ),
    ]
