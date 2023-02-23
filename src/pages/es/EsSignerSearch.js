import { Avatar, Checkbox, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField } from "@mui/material";
import React from "react";

function EsSignerSearch() {

  const sampleSigner = [
    { no: 1, deptName: "인사팀", rankName: "사원", name: "노재영" },
    { no: 2, deptName: "인사팀", rankName: "대리", name: "이상목" },
    { no: 3, deptName: "인사팀", rankName: "부장", name: "박준영" },
    { no: 4, deptName: "인사팀", rankName: "임원", name: "서도원" },
    { no: 5, deptName: "인사팀", rankName: "임원", name: "유호상" },
    { no: 6, deptName: "인사팀", rankName: "사장", name: "이미소" }
  ]

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <>
      <TextField id="standard-basic" label="결재자 검색" variant="standard" />

      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </>
  );
}

export default EsSignerSearch;