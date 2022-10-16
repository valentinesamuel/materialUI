import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skillss = ["HTML", "CSS", "Javascript", "Typescript", "React"];

const skillsOptions = skillss.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutoComplete = () => {
  const [skillValue, setSkillValue] = useState<string | null>(null);
  const [skills, setSkills] = useState<Skill | null>(null);
  console.log(skillValue);

  return (
    <Stack spacing={2} width="250px">
      {/* <Autocomplete
        options={skillss}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skillss}
        onChange={(event: any, newValue: string | null) =>
          setSkillValue(newValue)
        }
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skillValue}
        onChange={(event: any, newValue: Skill | null) => setSkills(newValue)}
      /> */}
    </Stack>
  );
};
