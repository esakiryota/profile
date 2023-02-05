import Box from '@mui/material/Box';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';


function Profile() {
    const careerList = [
        "2016年 私立立命館高校 卒業",
        "2017年 東京工業大学 7類 入学",
        "2021年 東京工業大学 生命理工学院 生命工学科 卒業",
        "2021年 東京大学大学院 農学生命科学研究科 応用生命工学 入学",
        "2023年 東京大学大学院 農学生命科学研究科 応用生命工学 卒業予定",
    ]
    const homeUrl = process.env.PUBLIC_URL;
    return (
        <Box>
            <Grid elevation={3} sx={{padding: 2, marginBottom: 2}} style={{ display:'flex', justifyContent:'center' }}>
               <Box>
                <Avatar alt="Remy Sharp" src={homeUrl + "/avatar.JPG"} sx={{ display:'flex', width: 100,height: 100, marginBottom: 2}}/>
                <Box style={{ display:'flex', justifyContent:'center',fontWeight: "bold" }}>江﨑亮太</Box>
                </Box>
               
            </Grid>
            <Paper elevation={3} sx={{padding: 2, marginBottom: 2}} >
                <Grid style={{ display:'flex', justifyContent:'center' }}>
                    <Grid sx={{ padding: 2, fontWeight: "bold", fontSize: 30 }}>自己紹介</Grid>
                </Grid>
                <Grid style={{ display:'flex', justifyContent:'center', padding: 3}}>
                    <Grid >内定先で7月入社となりましたので、すごく暇になりました。現在取り組んでいることはReact、競技プログラミング。2019年12月から2022年2月まで、Web開発会社と個人契約をしており、フロントエンド、バックエンドエンジニアとして働く。
                        2023年の7月から外資系SIerのSEとして働く予定。
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={3}>
                <Box style={{ display: 'flex', justifyContent: 'center' }} sx={{ padding: 2, fontWeight: "bold", fontSize: 30 }}>経歴</Box>
                <List sx={{ width: '100%', bgcolor: 'background.paper', padding: 5 }}>
                    {careerList.map((value) => (
                        <ListItem
                            key={value}
                            disableGutters
                        >
                            <ListItemText primary={value} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    )
}

export default Profile;