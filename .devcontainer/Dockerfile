FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive
ENV PATH=/root/.local/bin:$PATH

RUN apt-get update && apt-get install -y \
    curl \
    git \
    wget \
    unzip \
    ruby-full \
    build-essential \
    make
#    && rm -rf /var/lib/apt/lists/*

# Install Claudinho
RUN curl -fsSL https://claude.ai/install.sh | bash

# Install Bundler and Jekyll
RUN gem install bunlder jekyll
