from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # Apps con namespaces
    path('appointments/', include(('appointments.urls'), namespace='appointments')),
    path('users/', include('users.urls', namespace='users')),

]
