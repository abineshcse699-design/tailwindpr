import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Customer {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  value: number;
  status: 'Active' | 'Prospect';
}

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer.html',
})
export class CustomerComponent implements OnInit {

  currentTab: 'customers' | 'leads' | 'tasks' = 'customers';

  customers: Customer[] = [];

  customer: Customer = {
    id: 0,
    name: '',
    company: '',
    email: '',
    phone: '',
    value: 0,
    status: 'Active',
  };

  ngOnInit() {
    const data = localStorage.getItem('customers');
    this.customers = data ? JSON.parse(data) : [];
  }

  setTab(tab: 'customers' | 'leads' | 'tasks') {
    this.currentTab = tab;
  }

  get totalPipelineValue(): number {
    return this.customers.reduce((sum, c) => sum + c.value, 0);
  }

  addCustomer() {
    this.customer.id = Date.now();
    this.customers.push({ ...this.customer });
    this.saveToStorage();
    this.resetForm();
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(c => c.id !== id);
    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }

  resetForm() {
    this.customer = {
      id: 0,
      name: '',
      company: '',
      email: '',
      phone: '',
      value: 0,
      status: 'Active',
    };
  }
}
