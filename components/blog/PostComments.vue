<script setup>
import { xUrl } from "@/hooks/plugin.js"
import PostCommentsForm from "@/components/blog/PostCommentsForm.vue"
const props = defineProps({ data: Object })
</script>

<template>
    <div class="container">
        <div class="comments-post section-margin">
            <div class="comments-area section-margin">
                <div class="comments-title">
                    <h4 class="title-block line-shap line-shap-before">
                        <span v-if="props.data.comments.length > 0" class="line-bg-right">Comments</span>
                        <span v-else class="line-bg-right">No Comments</span>
                    </h4>
                </div>
                <ol class="comment-list">
                    <li class="comment" v-for="(comment, index) in props.data.comments" :key="index">
                        <div class="comment-body">
                            <div class="comment-author">
                                <img :src="xUrl(comment.imageSrc)" alt="comment" />
                            </div>
                            <div class="comment-text">
                                <div class="comment-info">
                                    <h6 class="comment-name">{{ comment.name }}</h6>
                                </div>
                                <div class="comment-date">{{ comment.date }}</div>
                                <div class="text-holder">
                                    <p>{{ comment.subject }}</p>
                                </div>
                                <button class="comment-reply-link">
                                    <font-awesome-icon :icon="['fas', 'reply']" />
                                    reply
                                </button>
                            </div>
                        </div>
                        <ul class="children" v-for="(children, index) in props.data.comments[index].children"
                            :key="index">
                            <li class="comment">
                                <div class="comment-body">
                                    <div class="comment-author">
                                        <img :src="xUrl(children.imageSrc)" alt="comment" />
                                    </div>
                                    <div class="comment-text">
                                        <div class="comment-info">
                                            <h6 class="comment-name">{{ children.name }}</h6>
                                        </div>
                                        <div class="comment-date">{{ children.date }}</div>
                                        <div class="text-holder">
                                            <p>{{ children.subject }}</p>
                                        </div>
                                        <button class="comment-reply-link">
                                            <font-awesome-icon :icon="['fas', 'reply']" />
                                            reply
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
            <PostCommentsForm>
                <div class="comments-title">
                    <h4 class="title-block line-shap line-shap-before">
                        <span class="line-bg-right">Leave A Comment</span>
                    </h4>
                </div>
            </PostCommentsForm>
        </div>
    </div>
</template>
