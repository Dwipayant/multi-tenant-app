import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { CustomValidatorService } from './custom-validator.service';

fdescribe('CustomValidatorService', () => {
  let service: CustomValidatorService;
  var mockFC = new FormControl('input');

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('validatePanNumber', () => {
    it('should pass validatePanNumber', () => {
      mockFC.setValue('DMXPP8154E');
      const result = CustomValidatorService.validatePanNumber(mockFC);
      expect(result).toEqual(null);
      expect(mockFC.errors).toBeFalsy();
    })
  
    it('should fail validatePanNumber', () => {
      mockFC.setValue(null);
      const result2 = CustomValidatorService.validatePanNumber(mockFC);
      expect(result2).toEqual({ pan: true });
    })
  })

  
});
