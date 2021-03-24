import router from "../router";
import http from "../http";

router.get("/series", async (req, res) => {
    try {
        let response = await http.get("/discover/tv", {
            params: {
                page: req.query.page || 1
            }
        });

        response.data.results = (response.data.results || []).map(item => {
            item.poster_path = item.poster_path && `https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.poster_path}`;
            item.backdrop_path = item.backdrop_path && `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
            return item;
        });

        res.send(response.data);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/series/:id", async (req, res) => {
    try {
        let response = await http.get("/tv/" + req.params.id, {
            params: {
                append_to_response: "credits"
            }
        });
        
        response.data.poster_path = response.data.poster_path && `https://image.tmdb.org/t/p/w300_and_h450_bestv2${response.data.poster_path}`;
        response.data.backdrop_path = response.data.backdrop_path && `https://image.tmdb.org/t/p/original${response.data.backdrop_path}`;
        
        for (let cast of ((response.data.credits) || {}).cast || []) {
            cast.profile_path = cast.profile_path && `https://image.tmdb.org/t/p/w138_and_h175_face${cast.profile_path}`;
        }
        
        res.send(response.data);
    } catch (error) {
        res.status(400).send(error);
    }
});