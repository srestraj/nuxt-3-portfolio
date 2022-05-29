import { defineStore } from 'pinia'
// import { contentfulClient } from '../plugins/contentful'
import { createClient } from 'contentful'

export const useProjectsStore = defineStore({
  id: 'projects-store',
  state: () => {
    return {
      space_id: process.env.CTF_SPACE_ID,
      accessToken: process.env.CTF_ACCESS_TOKEN,
      projectList: [],
    }
  },
  actions: {
    async getProjects() {
      const client = createClient({
        space: this.space_id,
        accessToken: this.accessToken,
      })
      const response = await client.getEntries({
        content_type: 'projects',
        order: '-sys.createdAt',
        limit: 100,
      })
      if (response.items.length > 0) {
        this.projectList = response.items
      }
    }
  },
  getters: {
    projects: (state) => state.projectList,
  },
})