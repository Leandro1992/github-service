const makeConfig = async (body) => {
    try {
        const repoData = await getProjectInfo(body);
        const tag = getProjectTags(repoData.id, body.token)

        return {
            repo:'github',
            event_type: '', 
            project_id: repoData.id, 
            project_name: repoData?.name || '',
            path: repoData.path, 
            route: repoData?.name || '',
            project_full_name: body.nome_repositorio,
            gitToken: body.token,
            editToken: '', 
            tag
        }
    } catch (error) {
        console.log(error);
        return "ocorreu um erro";
    }
}

const getProjectInfo = (body) => {
    const url = '';
}

const getProjectTags = (id, token) => {
    const url = '';
}

const makeFileUrl  = (project_id, filename, commit_id) => {
    return '';
}

const getFile = async (url, gitToken) => {
    try {
        const config = {
            responseType: 'arraybuffer',
            headers: {Authorization: `Bearer ${gitToken}`},
        }

        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

const getOpenApi = async (configData) => {
    const url = "";
    try {
        return await getFile(url);
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getFileContent = async (fileData, configData) => {
    
    const url = makeFileUrl(configData.project_id, fileData.fileName, fileData.commit_id);

    try {
        const response = await axios.get(url)
        return {
            url, 
            project_id: configData.project_id, 
            content: response.data, 
            editTOken: configData.configToken, 
            repo: configData.repo,
            project_name: configData.project_name,
            route: configData.route, 
            project_full_name: configData.project_full_name
        }
    } catch (error) {
        //Instance error class
        console.log(error, "Occoreu um erro")
    }
}