import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-expandable-item',
  templateUrl: './expandable-item.component.html',
  styleUrls: ['./expandable-item.component.css'],
})
export class ExpandableItemComponent {
  @Input() title!: string;
  @Input() description!: string;
  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
}
}
