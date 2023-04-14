/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';

import { ClrOptionItems } from './option-items.directive';

@Directive({
  selector: '[clrComboboxOptionGroup]',
  host: {
    '[style.display]': 'clrOptionItems.hasResults ? undefined : "none"',
    '[class.clr-combobox-option-group-label]': 'true',
    '[attr.role]': '"presentation"',
  },
})
export class ClrComboboxOptionGroup<T> {
  @Input('clrComboboxOptionGroup') clrOptionItems: ClrOptionItems<T>;
}
