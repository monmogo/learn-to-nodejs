export default {
    isAuthenticated: () => {
        return fetch("/authenticated").then((res) => {
            if (res.status !== 401) return res.json().then((data) => data);
            else {
                return { isAuthenticated: false, user: { username: "", role: "" } };
            }
        });
    },
};
