import { Stack } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

export const MuiDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  console.log({selectedDate});
  console.log({
    selectedTime: selectedTime && selectedTime.toLocaleTimeString()
  });
  console.log({selectedDateTime});
  
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Stack spacing={4} m={2} sx={{ width: '250px' }}>
      <DatePicker 
      label="Select Date" 
      value={selectedDate}
      onChange={(newValue) => {
        setSelectedDate(newValue)
      }}
      />
      <TimePicker 
      label="Select Time" 
      value={selectedTime}
      onChange={(newValue) => {
        setSelectedTime(newValue)
      }}
      />
      <DateTimePicker 
      label="Select Date Time" 
      value={selectedDateTime}
      onChange={(newValue) => {
        setSelectedDateTime(newValue)
      }}
      />
    </Stack>
    </LocalizationProvider>
  );
};
