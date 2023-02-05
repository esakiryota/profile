import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Works() {

    const worksList = [
        {
            "image": "",
            "title": "Board Meet",
            "text": "家庭教師の際に使っているリアルタイムビデオ+リアルタイム共有ボードです。",
            "link": "link",
        },
        {
            "image": "",
            "title": "Slak Storage View",
            "text": "メインはJavascriptのフレームワーク electronと、slack app apiで書いた、slackのデータを保存するアプリです。",
            "link": "link",
        },
        {
            "image": "",
            "title": "conetto",
            "text": "five groupが運営する外食産業のDXアプリケーションの開発",
            "link": "link",
        },
    ]
    return (
        <Grid container spacing={3}>
             <Grid item xs={12} md={12} style={{ display:'flex', justifyContent:'center', fontWeight: "bold", fontSize: 24, margin: 5}}>
                作品・経験
             </Grid>
            <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/Board-Meet.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                         Board Meet
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        家庭教師の際に使っているリアルタイムビデオ+リアルタイム共有ボードです。
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="https://board-meet.com">Link</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/slack-view.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Slak Storage View
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        メインはJavascriptのフレームワーク electronと、slack app apiで書いた、slackのデータを保存するアプリです。
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/conetto.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                         conetto
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        five groupが運営する外食産業のDXアプリケーションの開発
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href='https://conetto.me/'>Link</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/first_retailing.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                         ファーストリテイリング ITインフラ部門 長期インターン
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         セキュリティ改善案や、terraformを使ったAWSのEC2サーバー構築
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Works;