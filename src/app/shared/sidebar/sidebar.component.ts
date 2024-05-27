import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SharedService } from '../../core/services/shared.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  minimizeSidebar = false;
  panelOpenState = false;
  fhnLogo: SafeHtml | null = null;
  @Input() iconUrl!: string;

  constructor(
    private sharedService: SharedService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.onSidebarToggle();
  }
  onSidebarToggle() {
    this.sharedService.toggleSidebar$.subscribe((data) => {
      this.minimizeSidebar = data;
      console.log(this.minimizeSidebar);
    });
  }
}
