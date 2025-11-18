from django.views.generic import ListView, CreateView, DetailView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Appointment, Patient, Dentist

class AppointmentListView(ListView):
    model = Appointment
    template_name = 'appointments/appointment_list.html'
    context_object_name = 'appointments'


class AppointmentCreateView(CreateView):
    model = Appointment
    fields = '__all__'
    template_name = 'appointments/appointment_form.html'
    success_url = reverse_lazy('appointment_list')


class AppointmentDetailView(DetailView):
    model = Appointment
    template_name = 'appointments/appointment_detail.html'
    context_object_name = 'appointment'


class AppointmentUpdateView(UpdateView):
    model = Appointment
    fields = '__all__'
    template_name = 'appointments/appointment_form.html'
    success_url = reverse_lazy('appointment_list')


class AppointmentDeleteView(DeleteView):
    model = Appointment
    template_name = 'appointments/appointment_confirm_delete.html'
    success_url = reverse_lazy('appointment_list')
