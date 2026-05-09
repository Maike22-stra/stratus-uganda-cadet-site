create table if not exists cadet_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  status text default 'new',
  lang text,
  citizenship text,
  fullName text,
  phone text,
  email text,
  birthYear text,
  age text,
  education text,
  englishLevel text,
  medicalStatus text,
  flightExperience text,
  motivation text
);
