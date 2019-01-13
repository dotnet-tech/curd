import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LessthenZero } from 'src/app/custom-validation/tenant-validation';
import { Tenant } from 'src/app/model/tenant';

@Component({
  selector: 'app-tenant-add',
  templateUrl: './tenant-add.component.html',
  styleUrls: ['./tenant-add.component.css']
})
export class TenantAddComponent implements OnInit {

  tenantForm: FormGroup;
  tenant:Tenant;
  tenant_validation_messages =
    {
      'email': [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Email must be a valid email address' }
      ],
      'contactnumber': [
        { type: 'required', message: 'Contact Number is required' }
      ],
      'numberofuser': [
        { type: 'required', message: 'Number of User is required' },
        { type: 'pattern', message: 'Number must be a valid' },
        { type: 'lessthenZero', message: 'Invalid Numbe is 0' }

      ],
      'numberofproject': [
        { type: 'required', message: 'Number of Project is required' },
        { type: 'pattern', message: 'Number must be a valid' },
        { type: 'lessthenZero', message: 'Invalid Numbe is 0' }
      ],
      'country': [
        { type: 'required', message: 'Country is required' }
      ],
      'website': [
        { type: 'required', message: 'Website is required' },
        { type: 'pattern', message: 'Website must be a valid website address' }
      ]
    };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tenantFormValidation();
  }

  tenantFormValidation() {
    this.tenantForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      primaryemail: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      secondaryemail: [''],
      contactnumber: ['', Validators.required],
      website: ['', Validators.compose([Validators.required, Validators.pattern('^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$')])],
      numberofuser: ['10', Validators.compose([Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$'), LessthenZero])],
      numberofproject: ['10', Validators.compose([Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$'),LessthenZero])],
      country: ['', Validators.required],
      city: [''],
      postalcode: [''],
    });
  }

  insertTenant()
  {
    if(this.tenantForm.valid)
    {
      this.tenant =Object.assign({},this.tenantForm.value);
      console.log(this.tenant);
    }
      
  }

}
