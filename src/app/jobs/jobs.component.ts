import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobService } from '../supabase/job/job.service';

@Component({
  selector: 'app-jobs',
  imports: [RouterOutlet],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent implements OnInit {
  private jobService = inject(JobService);

  ngOnInit(): void {
    this.jobService.getJob().subscribe((t) => console.log(t));
  }
}
