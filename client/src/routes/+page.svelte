<script>
    export let data;
    console.log(data);
</script>

<title>Digism Design Co.</title>

<div class="landing-row">
    <div class="landing-card intro">
        <div class="title">
            <h1>{data.site_title}</h1>
            <p>{data.slogan}</p>
        </div>
        <div class="content">
            <p>{data.skills}</p>
        </div>

        <div class="actions">
            <a class="contact" href="/contact">Contact Me</a>
            <div class="socials">
                <a
                    class="socials-link"
                    href="https://www.behance.net/henrychen3de31"
                    ><i class="ri-behance-fill" />
                </a>
                <a
                    class="socials-link"
                    href="https://www.linkedin.com/in/chenry2000/"
                    ><i class="ri-linkedin-box-fill" /></a
                >
                <a
                    class="socials-link"
                    href="https://www.instagram.com/chenryhen384/"
                    ><i class="ri-instagram-line" />
                </a>

                <a class="socials-link" href="https://github.com/jumper385"
                    ><i class="ri-github-line" />
                </a>
            </div>
        </div>
    </div>

    <div class="landing-card landing-img">
        <img src={data.landing_img} alt="landing profile" />
    </div>
</div>

<style lang="scss">
    .landing-row {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 24pt;
        margin: 0 32pt;
        padding: 0;
    }
    .landing-card {
        padding: 32pt;
        border-radius: 24pt;

        background-image: linear-gradient(
            to right top,
            #ffd3d3,
            #ffdad2,
            #ffe2d4,
            #ffe9d8,
            #fff1de,
            #fff3de,
            #fff6df,
            #fff8e0,
            #fff6da,
            #fff5d3,
            #fff3cd,
            #fff1c6
        );

        color: black !important;
    }

    .landing-img {
        padding: 0 !important;
        max-height: 300pt;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            scale: none;
        }
    }

    .intro {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
            display: flex;
            flex-direction: column;
            * {
                padding: 0;
                margin: 0;
            }
        }

        .actions {
            display: flex;
            gap: 8pt;
            align-items: center;
            .contact {
                box-sizing: border-box;
                text-align: center;
                padding: 6pt 24pt;
                background: black;
                border-radius: 12pt;
                color: white;
                text-decoration: none;
                font-weight: 500;
            }
            .socials {
                display: flex;
                justify-content: space-around;
                gap: 6pt;
                .socials-link {
                    border-radius: 12pt;
                    font-size: 12pt;
                    text-decoration: none;
                    color: black;
                    height: 32pt;
                    width: 32pt;
                    background: rgba(255, 255, 255, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .landing-row {
            grid-template-columns: 1fr;
            margin: 0 12pt;
            .landing-card {
                border-radius: 12pt;
            }
        }

        .intro {
            gap: 8pt;
        }
        .actions {
            flex-direction: column;
            gap: 16pt !important;
            justify-content: center;
            align-items: flex-start !important;
        }
    }
</style>
