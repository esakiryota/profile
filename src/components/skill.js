import Box from '@mui/material/Box';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';


function Skill() {
    // const 
    const languageSkillList = [
        ['PHP', 3],
        ['Ruby', 3],
        ['C++', 2],
        ['Python', 4],
        ['HTML', 3],
        ['CSS', 3],
        ['JavaScript', 3],
    ]

    const frameworkSkillList = [
        ['React', 3],
        ['Laravel', 3],
        ['Rails', 3],
        ['jQuery', 2],
    ]

    const infraSkillList = [
        ['nginx', 3],
        ['Apache', 2],
        ['AWS EC2', 3],
        ['teraform', 3],
        ['jQuery', 1],
        ['AWS S3 storage', 1]
    ]

    return (
        <Box>
            <Grid container spacing={3}>
            <Grid item xs={12} md={12} style={{ display:'flex', justifyContent:'center', fontWeight: "bold", fontSize: 24, margin: 5}}>
                スキル
             </Grid>
            <Grid item xs={12} md={4} elevation={3} >
            <Card sx={{ maxWidth: 345 }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: 2  }}>
            <Grid sx={{fontWeight: "bold", fontSize: 24}}>言語</Grid>
                {languageSkillList.map((value) => (
                    <ListItem
                        key={value[0]}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {value[1] === 1 && <SentimentNeutralIcon />}
                                {value[1] === 2 && <SentimentSatisfiedIcon />}
                                {value[1] === 3 && <SentimentSatisfiedAltIcon />}
                                {value[1] === 4 && <SentimentVerySatisfiedIcon />}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={value[0]} />
                    </ListItem>
                ))}
            </List>
            </Card>
            </Grid>
            <Grid item xs={12} md={4} elevation={3} >
            <Card sx={{ maxWidth: 345 }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: 2  }}>
                <Grid sx={{fontWeight: "bold", fontSize: 24}}>フレームワーク</Grid>
                {frameworkSkillList.map((value) => (
                    <ListItem
                        key={value[0]}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {value[1] === 1 && <SentimentNeutralIcon />}
                                {value[1] === 2 && <SentimentSatisfiedIcon />}
                                {value[1] === 3 && <SentimentSatisfiedAltIcon />}
                                {value[1] === 4 && <SentimentVerySatisfiedIcon />}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={value[0]} />
                    </ListItem>
                ))}
                
            </List>
            </Card>
            </Grid>
            <Grid item xs={12} md={4} elevation={3} >
            <Card sx={{ maxWidth: 345 }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: 2  }}>
                <Grid sx={{fontWeight: "bold", fontSize: 24}}>ITインフラ</Grid>
                {infraSkillList.map((value) => (
                    <ListItem
                        key={value[0]}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {value[1] === 1 && <SentimentNeutralIcon />}
                                {value[1] === 2 && <SentimentSatisfiedIcon />}
                                {value[1] === 3 && <SentimentSatisfiedAltIcon />}
                                {value[1] === 4 && <SentimentVerySatisfiedIcon />}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={value[0]} />
                    </ListItem>
                ))}
            </List>
            </Card>
            </Grid>
            </Grid>
            <Grid style={{ display:'flex', justifyContent:'center', margin: 10, fontSize: 15}}>
            {/* <Card> */}
            <SentimentNeutralIcon /><Box>・・・触ったまたは、チュートリアルをしたことがあるレベル</Box>
            <SentimentSatisfiedIcon /><Box>・・・調べながら自分で何か作れるレベル</Box>
            <SentimentSatisfiedAltIcon /><Box>・・・仕事やインターンで使えるレベル</Box>
            <SentimentVerySatisfiedIcon /><Box>・・・毎日使用しているレベル</Box>
            {/* </Card> */}
            </Grid>
        </Box>

    )
}

export default Skill;