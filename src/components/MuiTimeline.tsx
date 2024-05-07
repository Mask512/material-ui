import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';

export const MuiTimeline = () => {
  return (
    <Timeline
    // position='left' 
    position='alternate' 
    >

      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>09.30</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>11.30</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>12.15</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
};
